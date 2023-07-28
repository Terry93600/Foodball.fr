-- récupérer tous les admins
SELECT user.*, role.name
FROM foodball.user
JOIN foodball.role
ON role.id = user.role_id
;

-- récupérer les équipes
SELECT event.*, team.nom FROM foodball.event JOIN foodball.team ON team.id = event.team1_id;
SELECT event.*, team.nom FROM foodball.event JOIN foodball.team ON team.id = event.team2_id;
SELECT event.*, typeEvent.nom FROM foodball.event JOIN foodball.typeEvent ON typeEvent.id = event.typeEvent_id;

-- Récupérer les resto
SELECT restaurant.*, user.nom FROM foodball.restaurant JOIN foodball.user ON user.id = restaurant.user_id;

-- selectionner user
 source database/foodball.sql; table foodball.role; table foodball.team; table foodball.typeEvent; table foodball.user;