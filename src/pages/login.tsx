import { FaGithub } from 'react-icons/fa'
import { ButtonDefault } from "../components/buttonGroups/button/styled";
import { Card } from "../components/card/styled";
import { HeadingTwo } from "../components/typography/heading/styled";
import { Text } from "../components/typography/text/styled";

export default function Login() {
  return (
    <Card>
      <HeadingTwo fontSize="2.5rem">
        Welcome to Caravels
      </HeadingTwo>
      <Text marginPosition="1rem 0" >Caravels is a community of best posts for you</Text>
      <ButtonDefault backgroundButton="#24292e" heightButton="3rem" fontSize="1.1rem">
        <FaGithub color="white"  size="1.5rem" />
        GitHub
      </ButtonDefault>
    </Card>
  )
}