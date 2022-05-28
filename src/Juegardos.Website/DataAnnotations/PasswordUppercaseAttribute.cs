using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.DataAnnotations;

public class PasswordUppercaseAttribute : ValidationAttribute
{
    public override bool IsValid(object? value)
    {
        if (value is not string password || string.IsNullOrWhiteSpace(password)) return false;
        return password.Any(char.IsUpper);
    }
}