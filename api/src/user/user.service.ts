import { Injectable } from '@nestjs/common'
import { User } from 'src/entities/user.entity' //追加！
import { Repository } from 'typeorm' //追加！
import { InjectRepository } from '@nestjs/typeorm' //追加！

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) //追加！
    private readonly userRepository: Repository<User> //追加！
  ) {}

  addUser(data: {
    name: string
    email: string
    password: string
    bio: string
    url: string
  }) {
    const user = new User()
    user.name = data.name
    user.email = data.email
    user.password = data.password
    user.bio = data.bio
    user.url = data.url
    return this.userRepository.insert(user)
  }

  getUserList() {
    return this.userRepository.find()
  }
}
