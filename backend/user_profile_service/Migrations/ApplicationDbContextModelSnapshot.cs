﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using user_profile_service.Data;

#nullable disable

namespace user_profile_service.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("user_profile_service.Models.UserProfile", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<List<string>>("LikedVideos")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<List<string>>("MyVideos")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<List<string>>("Subscribers")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<List<string>>("Subscriptions")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<List<string>>("WatchLater")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.HasKey("Id");

                    b.ToTable("UserProfiles");
                });
#pragma warning restore 612, 618
        }
    }
}
