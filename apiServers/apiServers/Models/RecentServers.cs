using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace apiServers.Models
{
    public class RecentServers
    {
        [Key]
        public int id { get; set; }

        public string city { get; set; }
        public string server { get; set; }

    }
}
