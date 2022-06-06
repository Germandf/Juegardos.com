using Juegardos.Website.Data;

namespace Juegardos.Website.Services;

public interface IUserService
{
    Task<User?> GetUser();
    Task<bool> UpdateUser(User user);
}