CREATE TABLE IF NOT EXISTS "accessory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"item" varchar(255) NOT NULL,
	"quantity" integer,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gallery" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"mobile" varchar,
	"tablet" varchar,
	"desktop" varchar,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productImage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"mobile" varchar,
	"tablet" varchar,
	"desktop" varchar,
	"cat_mobile" varchar,
	"cat_tablet" varchar,
	"cat_desktop" varchar,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"new" boolean DEFAULT true,
	"price" real NOT NULL,
	"description" varchar,
	"features" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "relatedProduct" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255),
	"name" varchar(255),
	"mobile" varchar,
	"tablet" varchar,
	"desktop" varchar,
	"productId" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accessory" ADD CONSTRAINT "accessory_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gallery" ADD CONSTRAINT "gallery_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE no action ON UPDATE no action;
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
