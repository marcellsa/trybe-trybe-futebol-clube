import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import leaderboardHomeMock from './mocks/leaderboardHome.mock';
import matchesMock from './mocks/matches.mock';
import teamsMock from './mocks/teams.mock';
// @ts-ignoremsa
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /leaderboard', () => {

  afterEach( function() {
    sinon.restore()
  });

  describe('Teste o método GET da rota /leaderboard/home', () => {
    it('Caso 1 - Deve retornar a classificação dos times que jogaram em casa', async () => {
      // Arrange
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);
      sinon.stub(Match, 'findAll').resolves(matchesMock as unknown as Match[]);
  
      // Action
      const response = await chai.request(app).get('/leaderboard/home').send(leaderboardHomeMock);
      
      // Assertion
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(leaderboardHomeMock);
    });
  });
  
})