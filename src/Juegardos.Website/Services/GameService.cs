using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public class GameService : IGameService
    {
        private readonly List<GameCategory> _categories = new()
        {
            new() { Name = "Acción", Games = new() {
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
            } },
            new() { Name = "Aventura", Games = new() {
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
            } },
            new() { Name = "Belleza", Games = new() {
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
            } },
            new() { Name = "Carreras", Games = new() {
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
            } },
            new() { Name = "Clásicos", Games = new() {
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
            } },
            new() { Name = "Click", Games = new() {
                new(){ Title = "Bubble Shot", Description = "", IsFavourite = true },
                new(){ Title = "Contra", Description = "" },
                new(){ Title = "Counter", Description = "" },
                new(){ Title = "Call Of Duty", Description = "Call of Duty: Civil War transporta a los jugadores al corazón de la volátil batalla geopolítica de la Guerra Fría, a principios de la década de 1980.", IsOutstanding = true },
                new(){ Title = "Stardew Valley", Description = "", IsFavourite = true },
                new(){ Title = "Hollow Knight", Description = "" },
                new(){ Title = "Dark Souls", Description = "" },
                new(){ Title = "Outer Wilds", Description = "", IsFavourite = true },
                new(){ Title = "Dead Cells", Description = "" },
                new(){ Title = "Carto", Description = "" },
            } },
            new() { Name = "Deportes", Games = new() {
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
            } },
            new() { Name = "Puzzle", Games = new() {
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
            } },
            new() { Name = "Tiros", Games = new() {
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
            } },
        };

        public async Task<List<GameCategory>> GetCategoriesWithGames()
        {
            await Task.Delay(1000);
            return _categories;
        }

        public async Task<Game?> GetGame(string name)
        {
            await Task.Delay(1000);
            foreach (var category in _categories)
                foreach (var game in category.Games)
                    if (game.Title.ToLower().Contains(name.ToLower()))
                        return game;
            return null;
        }

        public async Task<Game?> GetOutstandingGame()
        {
            await Task.Delay(1000);
            foreach (var category in _categories)
                foreach (var game in category.Games)
                    if (game.IsOutstanding)
                        return game;
            return null;
        }

        public async Task<List<Game>> SearchGames(string name)
        {
            await Task.Delay(1000);
            var games = new List<Game>();
            foreach (var category in _categories)
                foreach (var game in category.Games)
                    if (game.Title.ToLower().Contains(name.ToLower()))
                        games.Add(game);
            return games;
        }
    }
}
