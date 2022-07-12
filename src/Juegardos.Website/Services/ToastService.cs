using System.Timers;

namespace Juegardos.Website.Services;

public enum ToastLevel
{
    Info,
    Success,
    Warning,
    Error
}

public class ToastService : IDisposable
{
    public event Action<string, ToastLevel>? OnShow;
    public event Action? OnHide;
    private System.Timers.Timer? Countdown;

    public void ShowToast(string message, ToastLevel level)
    {
        OnShow?.Invoke(message, level);
        StartCountdown();
    }

    private void StartCountdown()
    {
        SetCountdown();

        if (Countdown is null)
            return;

        if (Countdown.Enabled)
        {
            Countdown.Stop();
            Countdown.Start();
        }
        else
        {
            Countdown.Start();
        }
    }

    private void SetCountdown()
    {
        if (Countdown is null)
        {
            Countdown = new System.Timers.Timer(5000);
            Countdown.Elapsed += HideToast;
            Countdown.AutoReset = false;
        }
    }

    private void HideToast(object? source, ElapsedEventArgs args)
    {
        OnHide?.Invoke();
    }

    public void Dispose()
    {
        Countdown?.Dispose();
    }
}