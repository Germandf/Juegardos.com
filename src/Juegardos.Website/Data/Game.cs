namespace Juegardos.Website.Data;

public class Game
{
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public bool IsFavourite { get; set; }
    public string Image { get; set; } = "https://image.tmdb.org/t/p/original///56v2KjBlU4XaOv9rVYEQypROD7P.jpg";
    public bool IsOutstanding { get; set; }
    public string Category { get; set; } = "";
    public int Likes { get; set; }
    public int Dislikes { get; set; }
    public LikeDecision UserLikeDecision { get; set; } = LikeDecision.None;
    public string HowToPlay { get; set; } = "Tu misión es infiltrarte en las tropas enemigas y eliminar tantos soldados como sea posible. Contás con munición limitada, pero podés conseguir más comprando en la tienda cada vez que el juego así lo permita.";
    public List<string> Controls { get; set; } = new() { "WASD - Moverse", "Click izquierdo - Disparar", "Click derecho - Apuntar", "R - Recargar", "Espacio - Saltar", "Q - Cambio de arma" };
    public string Video { get; set; } = "deadcells-trailer.mp4";
}

public enum LikeDecision
{
    None,
    Like,
    Dislike
}