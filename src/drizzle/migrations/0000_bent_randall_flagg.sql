DO $$ BEGIN
 CREATE TYPE "orderStatus" AS ENUM('proccessing', 'received', 'shipped', 'cancelled', 'delivered', 'returned');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "paymentMethod" AS ENUM('eMoney', 'cash');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accessory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "anonCartItem" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"addedAt" timestamp DEFAULT now() NOT NULL,
	"quantity" integer NOT NULL,
	"productId" uuid NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "anonOrderItem" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quantity" integer NOT NULL,
	"productId" uuid NOT NULL,
	"orderId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "anonOrder" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"paymentMethod" "paymentMethod" NOT NULL,
	"orderStatus" "orderStatus" NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "anonUser" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phoneNumber" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cartItem" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"addedAt" timestamp DEFAULT now() NOT NULL,
	"quantity" integer NOT NULL,
	"productId" uuid NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orderItem" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quantity" integer NOT NULL,
	"productId" uuid NOT NULL,
	"orderId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"paymentMethod" "paymentMethod" NOT NULL,
	"orderStatus" "orderStatus" NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productFeature" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"feature" text NOT NULL,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productImage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cat_mobile" text,
	"cat_tablet" text,
	"cat_desktop" text,
	"cart" text,
	"gallery_1" text,
	"gallery_2" text,
	"gallery_3" text,
	"mobile" text,
	"tablet" text,
	"desktop" text,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"name" text NOT NULL,
	"category" varchar(255) NOT NULL,
	"new" boolean DEFAULT true,
	"price" real NOT NULL,
	"description" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "relatedProduct" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"name" text NOT NULL,
	"mobile" text,
	"tablet" text,
	"desktop" text,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"phoneNumber" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accessory" ADD CONSTRAINT "accessory_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "anonCartItem" ADD CONSTRAINT "anonCartItem_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "anonCartItem" ADD CONSTRAINT "anonCartItem_userId_anonUser_id_fk" FOREIGN KEY ("userId") REFERENCES "anonUser"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "anonOrderItem" ADD CONSTRAINT "anonOrderItem_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "anonOrderItem" ADD CONSTRAINT "anonOrderItem_orderId_anonOrder_id_fk" FOREIGN KEY ("orderId") REFERENCES "anonOrder"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "anonOrder" ADD CONSTRAINT "anonOrder_userId_anonUser_id_fk" FOREIGN KEY ("userId") REFERENCES "anonUser"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_order_id_fk" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productFeature" ADD CONSTRAINT "productFeature_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productImage" ADD CONSTRAINT "productImage_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "relatedProduct" ADD CONSTRAINT "relatedProduct_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
