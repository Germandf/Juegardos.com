﻿using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public interface IGameService
    {
        Task<List<GameCategory>> GetCategoriesWithGames();
        Task<List<Game>> SearchGames(string name);
        Task<Game?> GetGame(string name);
        Task<Game?> GetOutstandingGame();
    }
}
