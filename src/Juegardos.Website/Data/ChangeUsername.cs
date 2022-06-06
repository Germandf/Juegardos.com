using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class ChangeUsername
{
    [Required(ErrorMessage = DataAnnotationMessages.UsernameRequired)]
    public string NewUsername { get; set; } = "";
}
