using Juegardos.Website.DataAnnotations;
using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class SignUp
{
    [Required(ErrorMessage = DataAnnotationMessages.UsernameRequired)]
    public string Username { get; set; } = "";
    [Required(ErrorMessage = DataAnnotationMessages.EmailRequired)]
    [EmailAddress(ErrorMessage = DataAnnotationMessages.EmailMustBeValid)]
    public string Email { get; set; } = "";
    [Required(ErrorMessage = DataAnnotationMessages.PasswordRequired)]
    [StringLength(255, ErrorMessage = DataAnnotationMessages.PasswordLength, MinimumLength = 8)]
    [PasswordUppercase(ErrorMessage = DataAnnotationMessages.PasswordUppercase)]
    [RegularExpression(@"^(?!.*^[a-zA-Z0-9]+$).*$", ErrorMessage = DataAnnotationMessages.PasswordNonAlphanumeric)]
    [DataType(DataType.Password)]
    public string Password { get; set; } = "";
}
