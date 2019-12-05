class Application
  def call(env)
    # env is a hash version of the request object specific to the web server. Rack does some work to give a normalized env so the middleware can behave consistently across web servers.

    req = Rack::Request.new(env)

    resp = Rack::Response.new

    if req.path == "/"
      resp.write "<h1>Hi there, this is my great website</h1>"
      resp.status = 200
    elsif req.path == "/cats"
      resp.write "<h2>MEOW</h2>"
      resp.status = 200
    else
      resp.write "That's not a real page, whoops"
      resp.status = 404
    end

    resp.finish
  end
end
