namespace Juegardos.Website.Data
{
    public class PaginationParameters
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
        public int TotalCount { get; set; } = -1;
        public int Offset => (PageNumber - 1) * PageSize;
        public int TotalPages => TotalCount / PageSize;
        public bool RemainingItems => TotalCount < 0 || (PageNumber - 1) * PageSize < TotalCount;
    }
}
