import { Avatar } from "../components/basics/Avatar"
import { Link } from "../components/basics/Link"
import FlexCenter from "../components/layout/Flex/FlexCenter"

type Link = {
  url: string,
  label: string,
  target?: string
}

export function Home() {
  const links: Link[] = [
    {
      url: "https://github.com/JaisonPeres",
      label: "> github.com/JaisonPeres",
      target: "_blank"
    },
    {
      url: "https://www.linkedin.com/in/jaison-cperes",
      label: "> linkedin.com/in/jaison-cperes",
      target: "_blank"
    },
    {
      url: "https://t.me/jaisonperes",
      label: "> t.me/jaisonperes",
      target: "_blank"
    },
    {
      url: 'https://github.com/JaisonPeres/jaisonperes',
      label: '> github deste projeto',
      target: '_blank'
    }
  ]
  return (
    <FlexCenter>
      <Avatar image="https://avatars.githubusercontent.com/u/7490817?v=4" name="Jaison"/>
      <h1>Jaison Peres</h1>
      <h2>full-stack developer</h2>
      <div>
        {links?.map((link) => (
          <Link key={link.url} url={link.url} label={link.label} target={link.target} />
        ))}
      </div>
    </FlexCenter>
  )
}