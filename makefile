dc/up:
	docker-compose up
	
d/ps:
	docker ps

dc/ps:
	docker-compose ps

dc/up-d:
	docker-compose up -d

dc/down:
	docker-compose down

dc/exec-mysql:
	docker-compose exec mysql mysql -uroot -p

dc/migrate:
	docker-compose run npx typeorm migration:run
	
dc/migrate-revert:
	docker-compose run npx typeorm migration:revert

dc/build:
	docker-compose run api npm run build