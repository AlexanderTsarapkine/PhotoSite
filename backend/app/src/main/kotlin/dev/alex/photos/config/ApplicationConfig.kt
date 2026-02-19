package dev.alex.photos.config

import org.glassfish.jersey.server.ResourceConfig
import dev.alex.photos.resource.HealthResource

class ApplicationConfig : ResourceConfig() {
    init {
        packages("dev.alex.photos.resource")
    }
}