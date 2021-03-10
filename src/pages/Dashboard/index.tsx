import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/31583703?s=460&u=39fcc83732de56a95e5a198c1beed327be4bf427&v=4" alt="" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>sdhsdgklngklsdjfsdfjskldsdklgjsdgklsfgdfhdf</p>
          </div>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;