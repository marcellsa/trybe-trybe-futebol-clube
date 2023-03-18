import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import Match from '../database/models/MatchModel';
import matchesMock from './mocks/matches.mock';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /matches', () => {

  afterEach( function() {
    sinon.restore()
  });

  describe('Teste o método GET da rota /matches', () => {
    it('Caso 1 - Deve retornar todas as partidas corretamente', async () => {
      // Arrange
      sinon.stub(Match, 'findAll').resolves(matchesMock as unknown as Match[]);
  
      // Action
      const response = await chai.request(app).get('/matches').send(matchesMock);
      
      // Assertion
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(matchesMock);
    })
  })
  
})