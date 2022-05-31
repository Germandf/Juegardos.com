using Juegardos.Website.Data;

namespace Juegardos.Website.Services;


public class UserService : IUserService
{
    private readonly User _user = new()
    {
        Name = "Juan Gonzales",
        Email = "juna_gonzales@mail.com",
        FavGames = "",
        TimePlayed = "32,4 horas",
        MemberSince = "14/02/2021"
    };

    public async Task<User?> GetUser()
    {
        await Task.Delay(1000);
        return _user;
    }
}



