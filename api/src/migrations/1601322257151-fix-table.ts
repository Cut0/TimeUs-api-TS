import { MigrationInterface, QueryRunner } from 'typeorm'

export class fixTable1601322257151 implements MigrationInterface {
  name = 'fixTable1601322257151'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `bio` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`')
  }
}
