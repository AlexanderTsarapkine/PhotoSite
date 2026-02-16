package dev.alex.photos.config


import com.google.inject.AbstractModule
import dev.alex.photos.service.PhotoService

class GuiceModule : AbstractModule() {
    override fun configure() {
        bind(PhotoService::class.java).asEagerSingleton()
    }
}