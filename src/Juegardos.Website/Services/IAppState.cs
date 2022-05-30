using Juegardos.Website.Components;
using Juegardos.Website.Data;

namespace Juegardos.Website.Services;

public interface IAppState
{
    Modal GameModal { get; set; }
    Game GameToShow { get; set; }
}
