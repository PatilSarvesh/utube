using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace user_profile_service.Migrations
{
    /// <inheritdoc />
    public partial class addedUserProfileTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.CreateTable(
                name: "UserProfile",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Subscribers = table.Column<List<string>>(type: "text[]", nullable: false),
                    Subscriptions = table.Column<List<string>>(type: "text[]", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VideoInfo",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Url = table.Column<string>(type: "text", nullable: false),
                    UserProfileId = table.Column<string>(type: "text", nullable: true),
                    UserProfileId1 = table.Column<string>(type: "text", nullable: true),
                    UserProfileId2 = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VideoInfo_UserProfile_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfile",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VideoInfo_UserProfile_UserProfileId1",
                        column: x => x.UserProfileId1,
                        principalTable: "UserProfile",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VideoInfo_UserProfile_UserProfileId2",
                        column: x => x.UserProfileId2,
                        principalTable: "UserProfile",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_VideoInfo_UserProfileId",
                table: "VideoInfo",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoInfo_UserProfileId1",
                table: "VideoInfo",
                column: "UserProfileId1");

            migrationBuilder.CreateIndex(
                name: "IX_VideoInfo_UserProfileId2",
                table: "VideoInfo",
                column: "UserProfileId2");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VideoInfo");

            migrationBuilder.DropTable(
                name: "UserProfile");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }
    }
}
