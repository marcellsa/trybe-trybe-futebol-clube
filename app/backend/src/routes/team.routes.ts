import * as express from 'express';
import TeamController from '../controllers/team.controller';
import TeamService from '../services/team.service';

const route = express.Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

route.get('/', teamController.findAll);

export default route;
