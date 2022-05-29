namespace Juegardos.Website.Data
{
    public class GameCategory
    {
        public string Name { get; set; } = "";
        public List<Game> Games { get; set; } = new();
    }
}
