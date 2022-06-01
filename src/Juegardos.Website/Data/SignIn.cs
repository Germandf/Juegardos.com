using Juegardos.Website.DataAnnotations;
using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class SignIn
{
    [Required(ErrorMessage = DataAnnotationMessages.UsernameOrEmailRequired)]
    public string UsernameOrEmail { get; set; } = "";
    [Required(ErrorMessage = DataAnnotationMessages.PasswordRequired)]
    [DataType(DataType.Password)]
    public string Password { get; set; } = "";
}
