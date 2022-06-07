﻿namespace Juegardos.Website.Data;

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
}

public enum LikeDecision
{
    None,
    Like,
    Dislike
}