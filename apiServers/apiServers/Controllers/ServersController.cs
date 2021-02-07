using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiServers.Context;
using apiServers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace apiServers.Controllers
{
    [Route("api/[controller]")]
    public class ServersController : Controller
    {
        private readonly AppDbContext context;
        public ServersController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.recent_servers.ToList());
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<controller>/5
        [HttpGet("{id}", Name ="GetGestor")]
        public ActionResult Get(int id)
        {
            try
            {
                var gestor = context.recent_servers.FirstOrDefault(g => g.id == id);
                return Ok(gestor);
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult Post([FromBody]RecentServers gestor)
        {
            try
            {
                context.recent_servers.Add(gestor);
                context.SaveChanges();
                return CreatedAtRoute("GetGestor", new { id = gestor.id }, gestor);
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }  
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]RecentServers gestor)
        {
            try
            {
                if (gestor.id == id)
                {
                    context.Entry(gestor).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetGestor", new { id = gestor.id }, gestor);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var gestor = context.recent_servers.FirstOrDefault(g => g.id == id);
                if (gestor != null)
                {
                    context.recent_servers.Remove(gestor);
                    context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
