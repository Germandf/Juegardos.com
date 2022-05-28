using Juegardos.Website.DataAnnotations;
using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class SignIn
{
    [Required(ErrorMessage = DataAnnotationMessages.UsernameOrEmailRequired)]
    public string UsernameOrEmail { get; set; } = "";
    [Required(ErrorMessage = DataAnnotationMessages.PasswordRequired)]
    [StringLength(255, ErrorMessage = DataAnnotationMessages.PasswordLength, MinimumLength = 8)]
    [PasswordUppercase(ErrorMessage = DataAnnotationMessages.PasswordUppercase)]
    [RegularExpression(@"^(?!.*^[a-zA-Z0-9]+$).*$", ErrorMessage = DataAnnotationMessages.PasswordNonAlphanumeric)]
    [DataType(DataType.Password)]
    public string Password { get; set; } = "";
}
