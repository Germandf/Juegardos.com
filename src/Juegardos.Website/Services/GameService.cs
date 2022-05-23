using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public class GameService : IGameService
    {
        private readonly List<Game> _games = new()
        {
            new(){ Title = "Bubble Shot", Description = "Un juego de disparar" },
            new(){ Title = "Contra", Description = "Otro juego de disparar" },
            new(){ Title = "Counter", Description = "Otro juego mas de disparar" },
        };

        public async Task<List<Game>> GetGames()
        {
            await Task.Delay(1000);
            return _games;
        }
    }
}
