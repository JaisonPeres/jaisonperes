import LinkButton from "./style"

type LinkProps = {
  url: string,
  label: string,
  target?: string
}

export function Link({
  url,
  label,
  target
}: LinkProps) {

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    window.open(url, target);
  }

  return (
    <LinkButton onClick={(element) => handleClick(element)}>
      {label}
    </LinkButton>
  )
}