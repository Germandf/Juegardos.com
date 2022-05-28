using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class ResetPassword
{
    [Required(ErrorMessage = DataAnnotationMessages.UsernameOrEmailRequired)]
    public string UsernameOrEmail { get; set; } = "";
}
