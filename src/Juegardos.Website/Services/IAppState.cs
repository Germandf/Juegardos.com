using Juegardos.Website.Components;
using Juegardos.Website.Data;
using Microsoft.AspNetCore.Components;

namespace Juegardos.Website.Services;

public interface IAppState
{
    Modal GameModal { get; set; }
    Game GameToShow { get; set; }
    List<Game> RelatedGames { get; set; }
    EventCallback StateHasChangedInModal { get; set; }
}
