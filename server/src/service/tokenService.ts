
import { UserDto } from '@/dto/user';
import jwt from 'jsonwebtoken'

class tokenService {
  generateTokens(dto: UserDto) {
    const token = jwt.sign(
      { id: dto.id, email: dto.email, role: dto.role },
      process.env.MY_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return {token}
  }
}

export default new tokenService()