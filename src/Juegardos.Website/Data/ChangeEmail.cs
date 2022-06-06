using Juegardos.Website.Helpers;
using System.ComponentModel.DataAnnotations;

namespace Juegardos.Website.Data;

public class ChangeEmail
{
    [Required(ErrorMessage = DataAnnotationMessages.EmailRequired)]
    [EmailAddress(ErrorMessage = DataAnnotationMessages.EmailMustBeValid)]
    public string NewEmail { get; set; } = "";
}
