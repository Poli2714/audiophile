import { UserRoundIcon } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { IconButton } from '@/components/buttons';
import { SignInLink, SignOutButton } from './components';

type ProfileProps = {
  isUserSignedIn: boolean;
  userName: string | undefined | null;
};

function Profile({ isUserSignedIn, userName }: ProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!isUserSignedIn ? (
          <IconButton>
            <UserRoundIcon size={20} />
          </IconButton>
        ) : (
          <Avatar>
            <AvatarImage></AvatarImage>
            <AvatarFallback className='border border-muted/20 bg-inherit hover:cursor-pointer hover:bg-accent'>
              {userName ? (
                userName[0].toUpperCase()
              ) : (
                <IconButton>
                  <UserRoundIcon size={20} />
                </IconButton>
              )}
            </AvatarFallback>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!isUserSignedIn ? (
          <DropdownMenuItem>
            <SignInLink />
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <SignOutButton />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
