import AvatarImage from "./style"

type AvatarProps = {
  image: string,
  name?: string
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarImage src={props.image} alt={props.name} />
  )
}