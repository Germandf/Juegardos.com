using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public interface IGameService
    {
        Task<List<Game>> GetGames();
    }
}
