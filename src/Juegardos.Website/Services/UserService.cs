using Juegardos.Website.Data;

namespace Juegardos.Website.Services;


public class UserService : IUserService
{
    private readonly User _user = new()
    {
        Username = "JuanGo17",
        Email = "juangonzales@gmail.com",
        TimePlayed = "32,4 horas",
        MemberSince = "14/02/2021",
        Image = "https://pbs.twimg.com/profile_images/1191360650624323584/Nk73n_r4_400x400.jpg"
    };

    public async Task<User?> GetUser()
    {
        await Task.Delay(1000);
        return _user;
    }
}



