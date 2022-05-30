using Juegardos.Website.Components;
using Juegardos.Website.Data;

namespace Juegardos.Website.Services
{
    public class AppState : IAppState
    {
        public Modal GameModal { get; set; } = new();
        public Game GameToShow { get; set; } = new();
    }
}
