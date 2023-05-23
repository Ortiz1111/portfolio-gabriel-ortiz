// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}, um desenvolvedor Fullstack com 28 anos de idade e mais de 2 anos de experiência em programação. Tenho habilidades em desenvolvimento web, incluindo linguagens de programação como HTML, CSS, JavaScript, NodeJS e ReactJS, Python. Trabalhei em vários projetos desafiadores ao longo da minha carreira, 
                desde o desenvolvimento de aplicativos web até a criação de soluções personalizadas para clientes.
                Meu objetivo é sempre fornecer soluções eficazes e eficientes para problemas complexos, e tenho uma abordagem focada em soluções para alcançar esse objetivo. 
                Tenho forte habilidade em comunicação e trabalho em equipe, o que me permite colaborar com colegas e clientes de diferentes áreas. 
                Estou sempre buscando aprender novas habilidades e aprimorar meu conhecimento para estar sempre atualizado em um mercado em constante evolução.
                Como desenvolvedor Fullstack, sou capaz de gerenciar projetos desde a concepção até a implementação, sempre com atenção aos detalhes. Além disso, minha paixão pela programação é algo que me motiva a enfrentar desafios diariamente. Sou uma pessoa feliz, comprometida e altamente motivada, sempre em busca de novas oportunidades para crescer e aprimorar minhas habilidades.
              
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                amo
              </Text>{" "}
              criar e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
            Conheça aqui neste ambiente, criado especialmente para você, todos os meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código-fonte do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
