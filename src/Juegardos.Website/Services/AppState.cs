using Juegardos.Website.Components;
using Juegardos.Website.Data;
using Microsoft.AspNetCore.Components;

namespace Juegardos.Website.Services;

public class AppState : IAppState
{
    public Modal GameModal { get; set; } = new();
    public Game GameToShow { get; set; } = new();
    public List<Game> RelatedGames { get; set; } = new();
    public EventCallback StateHasChangedInModal { get; set; }
}
