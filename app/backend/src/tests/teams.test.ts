import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import Team from '../database/models/TeamModel';
import teamsMock from './mocks/teams.mock';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /teams', () => {

  afterEach( function() {
    sinon.restore()
  });

  describe('Teste o método GET da rota /teams', () => {
    it('Caso 1 - Deve retornar todos os times corretamente', async () => {
      // Arrange
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);
  
      // Action
      const response = await chai.request(app).get('/teams').send(teamsMock);
      
      // Assertion
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsMock);
    })
  })
  
})