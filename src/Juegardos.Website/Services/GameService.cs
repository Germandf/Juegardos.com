using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public class GameService : IGameService
    {
        private readonly List<Game> _games = new()
        {
            new(){ Title = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Title = "Contra", Description = "" },
            new(){ Title = "Counter", Description = "" },
            new(){ Title = "Call Of Duty", Description = "" },
            new(){ Title = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Title = "Hollow Knight", Description = "" },
            new(){ Title = "Dark Souls", Description = "" },
            new(){ Title = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Title = "Dead Cells", Description = "" },
            new(){ Title = "Carto", Description = "" },
        };

        public async Task<List<Game>> GetGames()
        {
            await Task.Delay(1000);
            return _games;
        }
    }
}
