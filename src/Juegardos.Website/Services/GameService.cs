using Juegardos.Website.Data;

namespace Juegardos.Website.Services;

public class GameService : IGameService
{
    private readonly List<GameCategory> _categories = new()
    {
        new() { Name = "Acción", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Aventura", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Belleza", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Carreras", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Clásicos", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Click", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "Call of Duty: Civil War transporta a los jugadores al corazón de la volátil batalla geopolítica de la Guerra Fría, a principios de la década de 1980.", IsOutstanding = true },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Deportes", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Puzzle", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
        } },
        new() { Name = "Tiros", Games = new() {
            new(){ Name = "Bubble Shot", Description = "", IsFavourite = true },
            new(){ Name = "Contra", Description = "" },
            new(){ Name = "Counter", Description = "" },
            new(){ Name = "Call Of Duty", Description = "" },
            new(){ Name = "Stardew Valley", Description = "", IsFavourite = true },
            new(){ Name = "Hollow Knight", Description = "" },
            new(){ Name = "Dark Souls", Description = "" },
            new(){ Name = "Outer Wilds", Description = "", IsFavourite = true },
            new(){ Name = "Dead Cells", Description = "" },
            new(){ Name = "Carto", Description = "" },
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
                if (game.Name.ToLower().Contains(name.ToLower()))
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

    public async Task<List<Game>> SearchGames(string nameOrCategory, GameFilters? filters = null)
    {
        await Task.Delay(1000);
        var games = new List<Game>();
        foreach (var category in _categories)
            foreach (var game in category.Games)
                if (category.Name.ToLower().Contains(nameOrCategory.ToLower()) || game.Name.ToLower().Contains(nameOrCategory.ToLower()))
                    games.Add(game);
        if (filters is null)
            return games;

        // TODO FIX CATEGORIES
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
