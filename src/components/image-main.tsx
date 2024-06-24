import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import perfil from '../assets/430609832_419558727226879_9007760455859796589_n.png'

export function ImageMain() {
  return (
    <Avatar>
      <AvatarImage src={perfil} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
