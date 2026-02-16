package dev.alex.photos.infra

import dev.alex.photos.config.ApplicationConfig
import org.glassfish.grizzly.http.server.HttpServer
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory
import java.net.URI

object Server {
    fun start(): HttpServer {
        val uri = URI.create("http://0.0.0.0:9090/")
        return GrizzlyHttpServerFactory.createHttpServer(uri, ApplicationConfig())
    }
}