using Juegardos.Website.Data;

namespace Juegardos.Website.Services;

public class GameService : IGameService
{
    private readonly List<Game> _games = new()
    {
        new() { Category = GameCategoryOptions.Action, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Action, Name = "Contra" },
        new() { Category = GameCategoryOptions.Action, Name = "Counter" },
        new() { Category = GameCategoryOptions.Action, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Action, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Action, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Action, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Action, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Action, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Action, Name = "Carto" },

        new() { Category = GameCategoryOptions.Adventure, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Adventure, Name = "Contra" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Counter" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Adventure, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Adventure, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Adventure, Name = "Carto" },

        new() { Category = GameCategoryOptions.Beauty, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Beauty, Name = "Contra" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Counter" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Beauty, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Beauty, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Beauty, Name = "Carto" },

        new() { Category = GameCategoryOptions.Races, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Races, Name = "Contra" },
        new() { Category = GameCategoryOptions.Races, Name = "Counter" },
        new() { Category = GameCategoryOptions.Races, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Races, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Races, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Races, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Races, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Races, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Races, Name = "Carto" },

        new() { Category = GameCategoryOptions.Classics, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Classics, Name = "Contra" },
        new() { Category = GameCategoryOptions.Classics, Name = "Counter" },
        new() { Category = GameCategoryOptions.Classics, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Classics, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Classics, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Classics, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Classics, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Classics, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Classics, Name = "Carto" },

        new() { Category = GameCategoryOptions.Click, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Contra" },
        new() { Category = GameCategoryOptions.Click, Name = "Counter" },
        new() { Category = GameCategoryOptions.Click, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Click, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Click, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Click, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Click, Name = "Carto" },

        new() { Category = GameCategoryOptions.Sports, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Contra" },
        new() { Category = GameCategoryOptions.Sports, Name = "Counter" },
        new() { Category = GameCategoryOptions.Sports, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Sports, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Sports, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Sports, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Sports, Name = "Carto" },

        new() { Category = GameCategoryOptions.Puzzle, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Contra" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Counter" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Carto" },

        new() { Category = GameCategoryOptions.Shots, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Contra" },
        new() { Category = GameCategoryOptions.Shots, Name = "Counter" },
        new() { Category = GameCategoryOptions.Shots, Name = "Call Of Duty", Description = "Call of Duty: Civil War transporta a los jugadores al corazón de la volátil batalla geopolítica de la Guerra Fría, a principios de la década de 1980.", IsOutstanding = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Shots, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Shots, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Shots, Name = "Carto" },
    };

    public async Task<List<GameCategory>> GetCategoriesWithGames()
    {
        await Task.Delay(1000);
        var gameCategories = new List<GameCategory>();
        gameCategories.Add(new() { Name = "Acción", Games = _games.Where(x => x.Category == GameCategoryOptions.Action).ToList() });
        gameCategories.Add(new() { Name = "Aventura", Games = _games.Where(x => x.Category == GameCategoryOptions.Adventure).ToList() });
        gameCategories.Add(new() { Name = "Belleza", Games = _games.Where(x => x.Category == GameCategoryOptions.Beauty).ToList() });
        gameCategories.Add(new() { Name = "Carrera", Games = _games.Where(x => x.Category == GameCategoryOptions.Races).ToList() });
        gameCategories.Add(new() { Name = "Clásicos", Games = _games.Where(x => x.Category == GameCategoryOptions.Classics).ToList() });
        gameCategories.Add(new() { Name = "Click", Games = _games.Where(x => x.Category == GameCategoryOptions.Click).ToList() });
        gameCategories.Add(new() { Name = "Deportes", Games = _games.Where(x => x.Category == GameCategoryOptions.Sports).ToList() });
        gameCategories.Add(new() { Name = "Puzzle", Games = _games.Where(x => x.Category == GameCategoryOptions.Puzzle).ToList() });
        gameCategories.Add(new() { Name = "Tiros", Games = _games.Where(x => x.Category == GameCategoryOptions.Shots).ToList() });
        return gameCategories;
    }

    public async Task<Game?> GetGame(string name)
    {
        await Task.Delay(1000);
        foreach (var game in _games)
            if (game.Name.ToLower().Contains(name.ToLower()))
                return game;
        return null;
    }

    public async Task<Game?> GetOutstandingGame()
    {
        await Task.Delay(1000);
        foreach (var game in _games)
            if (game.IsOutstanding)
                return game;
        return null;
    }

    public async Task<List<Game>> SearchGames(string nameOrCategory, GameFilters? filters = null)
    {
        await Task.Delay(1000);
        var games = new List<Game>();
        foreach (var game in _games)
            if (game.Name.ToLower().Contains(nameOrCategory.ToLower()) || game.Category.ToLower().Contains(nameOrCategory.ToLower()))
                games.Add(game);

        if (filters is null)
            return games;

        if (!string.IsNullOrWhiteSpace(filters.Category))
            games = games.Where(x => x.Category == filters.Category).ToList();

        if (!string.IsNullOrWhiteSpace(filters.Popularity))
        {
            if (filters.Popularity == GamePopularityOptions.MorePopulars)
                games = games.OrderByDescending(x => x.Likes).ToList();
            else if (filters.Popularity == GamePopularityOptions.LessPopulars)
                games = games.OrderByDescending(x => x.Dislikes).ToList();
        }

        if (!string.IsNullOrWhiteSpace(filters.Order))
        {
            if (filters.Order == GameOrderOptions.Ascendant)
                games = games.OrderBy(x => x.Name).ToList();
            else if (filters.Order == GameOrderOptions.Descendant)
                games = games.OrderByDescending(x => x.Name).ToList();
        }
            
        return games;
    }
}
