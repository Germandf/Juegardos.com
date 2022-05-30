namespace Juegardos.Website.Helpers;

public static class StringHelper
{
    private static readonly Random _random = new();
    public static string RandomString(int length = 30)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return new string(Enumerable.Repeat(chars, length)
          .Select(s => s[_random.Next(s.Length)]).ToArray());
    }

    public static string FormatToNonUrlName(string name)
    {
        name = name.Replace("-", " ");
        name = name.ToLower();
        return name;
    }

    public static string FormatToUrlName(string name)
    {
        name = name.Replace(" ", "-");
        name = name.ToLower();
        return name;
    }
}
